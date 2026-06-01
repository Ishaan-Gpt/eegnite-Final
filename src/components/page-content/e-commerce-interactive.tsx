"use client";

import { IndustryHero } from "@/components/shared/IndustryHero";
import { IndustryLogoCarousel } from "@/components/shared/IndustryLogoCarousel";
import { IndustryProblemSolution } from "@/components/shared/IndustryProblemSolution";
import { IndustryServiceLinks } from "@/components/shared/IndustryServiceLinks";
import { IndustryWhyUs } from "@/components/shared/IndustryWhyUs";
import { IndustryValues } from "@/components/shared/IndustryValues";
import { ServiceProcess } from "@/components/shared/ServiceProcess";
import {
    ECOMMERCE_PROBLEMS,
    ECOMMERCE_SOLUTIONS,
    ECOMMERCE_SERVICE_LINKS,
    ECOMMERCE_WHY_REASONS,
    ECOMMERCE_VALUES,
    ECOMMERCE_PROCESS_STEPS,
    ECOMMERCE_LOGOS,
} from "@/data/e-commerce.data";

export function EcommerceHero() {
    return (
        <IndustryHero
            statBadge="E-Commerce Brands That Invest In Multi-Channel Digital Marketing Grow Revenue 2.8x Faster Than Those That Do Not"
            title={<>E-COMMERCE DIGITAL MARKETING<br />THAT CONVERTS BROWSERS INTO BUYERS</>}
            titleClassName="text-[5.4vw] xs:text-2xl md:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.1]"
            subtitle="ATTRACT MORE. CONVERT FASTER. SELL MORE."
            subtitleClassName="text-[2.8vw] xs:text-[10px] sm:text-xs md:text-xl lg:text-2xl"
            description="At EEGNITE, we build digital marketing systems engineered for e-commerce growth. From product discovery and paid acquisition to cart recovery and customer retention, every strategy we deploy is tied to one outcome: more revenue for your store, consistently and measurably."
            ctaText="Get a Free Growth Audit"
        />
    );
}

export function EcommerceLogoCarousel() {
    return (
        <IndustryLogoCarousel
            title="Brands That Choose Growth. Brands That Choose EEGNITE."
            logos={ECOMMERCE_LOGOS}
        />
    );
}

export function EcommerceProblemSolution() {
    return (
        <IndustryProblemSolution
            problemsTitle="WHY E-COMMERCE BUSINESSES STALL BEFORE THEY SCALE"
            problemsSubtitle="The Product Is Not The Problem. The Strategy Is."
            solutionsTitle="WHAT EEGNITE DOES TO TURN EVERY GAP INTO GROWTH"
            solutionsSubtitle="We Fix The Gaps. Systematically. Channel By Channel."
            problems={ECOMMERCE_PROBLEMS}
            solutions={ECOMMERCE_SOLUTIONS}
        />
    );
}

export function EcommerceServiceLinks() {
    return (
        <IndustryServiceLinks
            badgeText="Brands Combining SEO, Paid Ads, And Email Marketing See Up To 3x Higher Customer Lifetime Value Than Single-Channel Brands"
            title={<>EVERY SERVICE YOUR E-COMMERCE BRAND<br /><span className="text-[#FF6105]">NEEDS TO GROW ONLINE</span></>}
            description="From organic search to paid acquisition, email automation to web development — every service we deliver is built to work together as one integrated growth system for your store."
            services={ECOMMERCE_SERVICE_LINKS}
        />
    );
}

export function EcommerceWhyUs() {
    return (
        <IndustryWhyUs
            badgeText="Because E-Commerce Growth Demands Channel Precision, Not Just Channel Presence"
            title={<>WHY EEGNITE FOR <span className="text-[#FF6105]">E-COMMERCE</span> DIGITAL MARKETING?</>}
            reasons={ECOMMERCE_WHY_REASONS}
        />
    );
}

export function EcommerceValues() {
    return <IndustryValues values={ECOMMERCE_VALUES} />;
}

export function EcommerceProcess() {
    return (
        <ServiceProcess
            title={<>OUR PROCESS FOR <span className="text-[#FF6105]">E-COMMERCE GROWTH</span></>}
            steps={ECOMMERCE_PROCESS_STEPS}
        />
    );
}
