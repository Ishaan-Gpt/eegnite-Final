"use client";

import React from "react";
import { ServiceHero } from "@/components/shared/ServiceHero";
import { ServiceComparison } from "@/components/shared/ServiceComparison";
import { FullServiceGrid } from "@/components/shared/FullServiceGrid";
import { ServiceProcess } from "@/components/shared/ServiceProcess";
import { ServiceTimeline } from "@/components/shared/ServiceTimeline";
import { WhyChooseUs } from "@/components/shared/WhyChooseUs";
import {
    WEB_DESIGN_SERVICES,
    WEB_DESIGN_PROCESS_STEPS,
    WEB_DESIGN_TIMELINE_STEPS,
    WEB_DESIGN_CHOOSE_REASONS,
} from "@/data/web-design-development.data";

export function WebDesignHero() {
    return (
        <ServiceHero
            badgeText="88% Of Users Won't Return After A Poor Website Experience"
            title={<>WEB DESIGN & DEVELOPMENT<br />SERVICES THAT DRIVE REAL GROWTH</>}
            titleClassName="text-[5.8vw] xs:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1]"
            subtitle="CODE. CREATIVITY. CONVERSION."
            subtitleClassName="text-[3vw] xs:text-[10px] sm:text-xs md:text-xl lg:text-2xl"
            description={
                <>
                    At EEGNITE, <span className="text-[#FF6105] font-semibold">a website is not just a web address.</span> It is your best salesperson, working around the clock. We build sites that are <span className="text-[#FF6105] font-semibold">visually sharp, technically solid,</span> and designed from the ground up to convert. Because a website that does not convert is not doing its job.
                </>
            }
        />
    );
}

export function WebDesignComparisonSection() {
    return (
        <ServiceComparison
            title={<>WHY <span className="text-[#FF6105]">EEGNITE?</span></>}
            description={
                <>
                    Most web development companies build websites. Few build websites that work. The difference is not the template or the tech stack. It is the <span className="text-[#FF6105] font-semibold">strategy behind every design decision</span>, every layout choice, and every line of code. Businesses across India, the US, Europe, and the Middle East choose EEGNITE because we do not just deliver a website. We deliver a <span className="text-[#FF6105] font-semibold">conversion asset</span>.
                </>
            }
            firstSolutionTitle="EEGNITE WEB SOLUTION"
            firstSolutionItems={[
                {
                    title: "Conversion-First Design. Every Element Placed With Purpose.",
                    desc: "We design with your buyer in mind. Every layout, every CTA, every page flow built to guide visitors from landing to action. Beauty with a business brain. Always."
                },
                {
                    title: "Tailored Designs - Crafted Around Your Brand. Never One-Size-Fits-All.",
                    desc: "Every EEGNITE website is carefully customized to match your brand identity, audience behaviour, and business goals. We use flexible design frameworks to build faster and smarter - while ensuring every website feels unique, performs seamlessly, and is built to scale."
                },
                {
                    title: "Post-Launch Partnership. Your Site Grows As Your Business Grows.",
                    desc: "We do not disappear after launch. Speed monitoring, performance reviews, and CRO testing - we stay involved so your website keeps working as hard as your business demands."
                }
            ]}
            secondSolutionTitle="TRADITIONAL WEB AGENCY"
            secondSolutionItems={[
                {
                    title: "Beautiful Websites - No Conversions. Designed To Impress - Not To Sell.",
                    desc: "Agencies build visually polished websites that win design awards and generate zero leads. Pretty layouts without a conversion strategy are expensive brochures. Nothing more."
                },
                {
                    title: "Template-First Thinking. Your Brand Fitted Into Someone Else's Framework.",
                    desc: "The same off-the-shelf templates applied to every project. Fast to build. Easy to invoice. Generic by design. Your brand deserves more than a reskinned theme."
                },
                {
                    title: "Launch And Walk Away. No Support - No Optimisation - No Accountability.",
                    desc: "Your site goes live and the agency disappears. No performance review, no speed work, no CRO testing. The website ages while your business stalls."
                }
            ]}
        />
    );
}

export function FullServiceWebDesign() {
    return (
        <FullServiceGrid
            badgeText="First Impressions are 94% Design-Related"
            title={<>RESULTS-DRIVEN WEB DESIGN. <span className="text-[#FF6105]">FOCUSED ON CONVERSION GROWTH</span></>}
            description="Our web design and development services go beyond building pages. We create digital experiences that communicate your brand, earn visitor trust, and convert that trust into real business outcomes."
            services={WEB_DESIGN_SERVICES}
        />
    );
}

export function WebDesignProcessFloating() {
    return (
        <ServiceProcess
            title={<>OUR HIGH-PERFORMANCE WEBSITE <span className="text-[#FF6105]">DESIGN & DEVELOPMENT PROCESS</span></>}
            steps={WEB_DESIGN_PROCESS_STEPS}
        />
    );
}

export function ProtocolTimeline() {
    return (
        <ServiceTimeline
            title={<>HOW EEGNITE BECOMES A <span className="text-[#FF6105]">STRONG WEB DESIGN & DEVELOPMENT PARTNER</span> FOR YOUR BUSINESS</>}
            steps={WEB_DESIGN_TIMELINE_STEPS}
            ctaTitle="Talk to Us"
            ctaDescription="Get a free website consultation and speed audit to find your design and development improvement areas."
            ctaButtonText="Book Free Consultation"
        />
    );
}

export function WhyChooseSection() {
    return (
        <WhyChooseUs
            title={<>Why <span className="text-[#FF6105]">Businesses</span> Choose Us</>}
            reasons={WEB_DESIGN_CHOOSE_REASONS}
        />
    );
}
