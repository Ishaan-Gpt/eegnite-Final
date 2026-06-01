"use client";

import { IndustryHero } from "@/components/shared/IndustryHero";
import { IndustryLogoCarousel } from "@/components/shared/IndustryLogoCarousel";
import { IndustryProblemSolution } from "@/components/shared/IndustryProblemSolution";
import { IndustryServiceLinks } from "@/components/shared/IndustryServiceLinks";
import { IndustryWhyUs } from "@/components/shared/IndustryWhyUs";
import { IndustryValues } from "@/components/shared/IndustryValues";
import { ServiceProcess } from "@/components/shared/ServiceProcess";
import {
    MANUFACTURING_PROBLEMS,
    MANUFACTURING_SOLUTIONS,
    MANUFACTURING_SERVICE_LINKS,
    MANUFACTURING_WHY_REASONS,
    MANUFACTURING_VALUES,
    MANUFACTURING_PROCESS_STEPS,
    MANUFACTURING_LOGOS,
} from "@/data/manufacturing-logistics.data";

export function ManufacturingHero() {
    return (
        <IndustryHero
            statBadge="73% Of B2b Manufacturing Buyers Conduct More Than Half Their Research Online Before Engaging A Vendor."
            title={<>MANUFACTURING AND LOGISTICS<br />DIGITAL MARKETING THAT GENERATES<br />QUALIFIED INDUSTRIAL LEADS</>}
            titleClassName="text-[5.4vw] xs:text-2xl md:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.1]"
            subtitle="INCREASE INQUIRIES. STRENGTHEN AUTHORITY. DRIVE REVENUE."
            subtitleClassName="text-[2.8vw] xs:text-[10px] sm:text-xs md:text-xl lg:text-2xl"
            description="At EEGNITE, we understand the B2B buying complexity of manufacturing and logistics. Long decision cycles, multiple procurement stakeholders, and technical buying criteria demand a digital marketing strategy built on precision, authority, and sustained visibility - not mass-market tactics."
            ctaText="Get a Free Growth Audit"
        />
    );
}

export function ManufacturingLogoCarousel() {
    return (
        <IndustryLogoCarousel
            title="Brands That Choose Growth. Brands That Choose EEGNITE."
            logos={MANUFACTURING_LOGOS}
        />
    );
}

export function ManufacturingProblemSolution() {
    return (
        <IndustryProblemSolution
            problemsTitle="WHY MANUFACTURING AND LOGISTICS BRANDS STRUGGLE TO GENERATE LEADS ONLINE"
            problemsSubtitle="The product is world-class. The pipeline is empty. The gap is always digital visibility."
            solutionsTitle="WHAT EEGNITE DOES TO BUILD YOUR INDUSTRIAL BRAND'S DIGITAL PIPELINE"
            solutionsSubtitle="B2B marketing precision. Industrial sector understanding. Pipeline results."
            problems={MANUFACTURING_PROBLEMS}
            solutions={MANUFACTURING_SOLUTIONS}
        />
    );
}

export function ManufacturingServiceLinks() {
    return (
        <IndustryServiceLinks
            badgeText="Manufacturing Companies That Invest In B2b Content Marketing And Seo Generate 3x More Qualified Leads At 62% Lower Cost Than Outbound-Only Lead Generation Strategies."
            title={<>EVERY DIGITAL MARKETING SERVICE<br />YOUR MANUFACTURING OR LOGISTICS<br /><span className="text-[#FF6105]">BRAND NEEDS TO BUILD PIPELINE</span></>}
            description="We design and deploy cohesive acquisition strategies across all primary professional growth channels to target active patient searching intent."
            services={MANUFACTURING_SERVICE_LINKS}
        />
    );
}

export function ManufacturingWhyUs() {
    return (
        <IndustryWhyUs
            badgeText="Because Industrial B2b Marketing Requires Sector Understanding, Not Just Digital Skill."
            title={<>WHY EEGNITE FOR <span className="text-[#FF6105]">MANUFACTURING AND LOGISTICS</span> DIGITAL MARKETING?</>}
            reasons={MANUFACTURING_WHY_REASONS}
        />
    );
}

export function ManufacturingValues() {
    return <IndustryValues values={MANUFACTURING_VALUES} />;
}

export function ManufacturingProcess() {
    return (
        <ServiceProcess
            title={<>OUR PROCESS FOR <span className="text-[#FF6105]">MANUFACTURING & LOGISTICS</span> GROWTH</>}
            steps={MANUFACTURING_PROCESS_STEPS}
        />
    );
}
