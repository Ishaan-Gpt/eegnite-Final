"use client";

import {
    Cpu,
    LayoutDashboard,
    Search,
    Mail,
    Send,
    Zap,
    BarChart3,
    TrendingUp,
    Inbox,
    PieChart,
    Layers,
    FileText,
    Settings,
} from "lucide-react";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { ServiceComparison } from "@/components/shared/ServiceComparison";
import { FullServiceGrid } from "@/components/shared/FullServiceGrid";
import { ServiceProcess } from "@/components/shared/ServiceProcess";
import { ServiceTimeline } from "@/components/shared/ServiceTimeline";
import { WhyChooseUs } from "@/components/shared/WhyChooseUs";

export function EmailMarketingHero() {
    return (
        <ServiceHero
            badgeText="Email Marketing Delivers an Average ROI of 4200% - $42 Back For Every $1 Spent"
            title={<>EMAIL MARKETING SERVICES <br /> THAT DRIVE REAL GROWTH</>}
            titleClassName="text-[6.2vw] xs:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1]"
            subtitle="NURTURE LEADS. AUTOMATE GROWTH. CONVERT MORE."
            subtitleClassName="text-[3vw] xs:text-[10px] sm:text-xs md:text-xl lg:text-2xl"
            description={
                <>
                    At EEGNITE, <span className="text-[#FF6105] font-semibold">email is not a broadcast tool.</span> It is a revenue engine. Every sequence, every automation, every campaign we build has one purpose: <span className="text-[#FF6105] font-semibold">move your audience closer to a decision</span> and make that decision easy.
                </>
            }
        />
    );
}

export function EmailMarketingComparisonSection() {
    return (
        <ServiceComparison
            title={<>WHY <span className="text-[#FF6105]">EEGNITE?</span></>}
            description={
                <>
                    Most brands send emails. Few send emails that actually work. The difference is not the platform. It is the strategy, the segmentation, and the sequence behind every send. Businesses across India, the US, Europe, and the Middle East choose EEGNITE because we do not just manage email lists. We build <span className="text-[#FF6105] font-semibold">automated systems that nurture, convert, and retain</span> customers at scale.
                </>
            }
            firstSolutionTitle="EEGNITE EMAIL SOLUTIONS"
            firstSolutionItems={[
                {
                    title: "Right Message. Right Person. Right Moment.",
                    desc: "We map your customer journey and build sequences triggered by real actions. Every send is relevant and designed to move the reader one step closer to converting."
                },
                {
                    title: "Revenue-Tied Reporting. Metrics That Connect To Your Pipeline.",
                    desc: "We report on leads generated, revenue attributed, and cost per acquisition. Not just opens and clicks. Every metric tied to what actually grows your business."
                },
                {
                    title: "Your Voice. Your Audience. Every Send.",
                    desc: "Every email we write is on-brand, audience-specific, and built around a clear conversion goal. Consistent tone, consistent design, consistent growth."
                }
            ]}
            secondSolutionTitle="TRADITIONAL EMAIL MARKETING AGENCY"
            secondSolutionItems={[
                {
                    title: "Same Message. Every Subscriber. Every Time.",
                    desc: "Generic newsletters sent to an entire list regardless of behaviour, interest, or funnel stage. High unsubscribe rates, low conversions, and a brand that feels like noise."
                },
                {
                    title: "Vanity Metrics Dressed As Results. Open Rates Celebrated While Revenue Stays Flat.",
                    desc: "Agencies report click rates and call them wins. But if those clicks are not converting into leads or sales, the numbers mean nothing for your business."
                },
                {
                    title: "No Voice, No Strategy, No Brand.",
                    desc: "The same email design recycled across every client. No alignment to your brand, no understanding of your audience, no intention behind what gets sent."
                }
            ]}
        />
    );
}

export function FullServiceEmailMarketing() {
    const services = [
        { title: "EMAIL STRATEGY AND CAMPAIGN PLANNING", icon: LayoutDashboard, description: "We start with your goals and build backwards. Audience segmentation, send frequency, campaign types, and funnel mapping all defined before a single email is written. Strategy first. Always." },
        { title: "MARKETING AUTOMATION", icon: Cpu, description: "Trigger-based email flows that work around the clock. Welcome sequences, cart abandonment, post-purchase, and re-engagement flows - automated, tested, and optimised to convert without manual effort." },
        { title: "LEAD NURTURING SEQUENCES", icon: Layers, description: "Multi-step nurture sequences that educate, build trust, and move cold leads through the funnel at the right pace until they are ready to act. No lead left behind." },
        { title: "CRM INTEGRATION", icon: Settings, description: "We connect your email platform to your CRM so your sales and marketing teams work from the same data. Cleaner pipelines, smarter segmentation, and no leads falling through the gaps." },
        { title: "NEWSLETTER MANAGEMENT", icon: Mail, description: "Consistent, brand-aligned newsletters your audience actually look forward to reading. Curated content, strong copy, clear CTAs, and performance tracking built into every send." },
        { title: "LIST BUILDING AND SEGMENTATION", icon: Search, description: "Lead capture strategies, list hygiene processes, and audience segmentation by behaviour and intent - so every send reaches the right people and your list grows with quality contacts." },
        { title: "TRANSACTIONAL EMAIL SETUP", icon: Send, description: "Order confirmations, shipping updates, and account alerts designed to reinforce your brand at every post-purchase touchpoint. Functional emails that also convert." },
        { title: "EMAIL ANALYTICS AND REPORTING", icon: BarChart3, description: "Open rates, click rates, conversions, revenue per email, and list growth tracked and reported monthly. Every metric connected directly to your business outcomes." },
    ];

    return (
        <FullServiceGrid
            badgeText="Email Marketing ROI remains the highest of any major marketing channel."
            title={<>RESULTS-DRIVEN EMAIL MARKETING. <span className="text-[#FF6105]">FOCUSED ON PIPELINE GROWTH</span></>}
            description="Our email marketing services go beyond sending newsletters. We build automated systems that attract attention, nurture intent, and convert leads into loyal customers at every stage of the funnel."
            services={services}
        />
    );
}

export function EmailMarketingProcessFloating() {
    const steps = [
        { id: "01", title: "AUDIT AND DISCOVERY", desc: "Understand your list, goals, and current performance.", icon: Inbox },
        { id: "02", title: "STRATEGY BUILD", desc: "Segments, campaign types, and funnel mapping set.", icon: PieChart },
        { id: "03", title: "CONTENT CREATION", desc: "Copy, design, and sequences reviewed and approved.", icon: FileText },
        { id: "04", title: "AUTOMATION SETUP", desc: "Flows live. Triggers active. Tested before first send.", icon: Settings },
        { id: "05", title: "TRACK AND OPTIMISE", desc: "Weekly data review. Fast iteration on what converts.", icon: BarChart3 },
        { id: "06", title: "REPORT AND SCALE", desc: "Monthly results. List health reviewed. Growth planned.", icon: TrendingUp },
    ];

    return (
        <ServiceProcess
            title={<>OUR ROI-DRIVEN <span className="text-[#FF6105]">EMAIL MARKETING PROCESS</span></>}
            steps={steps}
        />
    );
}

export function ProtocolTimeline() {
    const steps = [
        { t: "Email Marketing Experience", d: "Years of building automated email systems focused on engagement, retention, and revenue growth." },
        { t: "Campaign Consistency", d: "Structured email workflows, segmentation, and testing processes that keep campaigns delivering consistently." },
        { t: "Email Transparency", d: "Open rates, click tracking, automation insights, and campaign reports delivered with complete clarity." },
        { t: "Revenue ROI Protection", d: "Every sequence, automation, and campaign is designed to increase customer value while protecting your marketing spend." },
        { t: "Shared Growth Knowledge", d: "We share campaign insights, customer behaviour patterns, and optimization strategies your team can learn from." },
    ];

    return (
        <ServiceTimeline
            title={<>HOW EEGNITE BECOMES A <span className="text-[#FF6105]">STRONG EMAIL MARKETING PARTNER FOR YOUR BUSINESS</span></>}
            steps={steps}
            ctaTitle="Talk to Us"
            ctaDescription="Get a free email program assessment from our experts and identify your next revenue wins"
            ctaButtonText="Get Your Free Analysis"
        />
    );
}

export function WhyChooseSection() {
    const reasons = [
        { id: "01", title: "Personalized Communication That Converts", desc: "We create targeted email campaigns that speak directly to your audience, helping you build stronger customer relationships and increase repeat purchases." },
        { id: "02", title: "Automation That Works 24/7", desc: "From welcome sequences to abandoned cart recovery and retention flows, we build automated systems that consistently drive engagement and revenue." },
        { id: "03", title: "Data-Driven Campaign Optimization", desc: "Every open, click, and conversion is tracked to refine performance. We continuously optimize campaigns to improve deliverability, engagement, and ROI." },
        { id: "04", title: "Long-Term Customer Retention", desc: "Email marketing is more than promotions. We help brands stay top-of-mind with value-driven communication that strengthens loyalty over time." },
    ];

    return (
        <WhyChooseUs
            title={<>WHY <span className="text-[#FF6105]">BUSINESSES</span> CHOOSE US</>}
            reasons={reasons}
        />
    );
}
