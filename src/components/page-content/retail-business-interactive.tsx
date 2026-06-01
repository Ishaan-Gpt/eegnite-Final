"use client";

import { IndustryHero } from "@/components/shared/IndustryHero";
import { IndustryLogoCarousel } from "@/components/shared/IndustryLogoCarousel";
import { IndustryProblemSolution } from "@/components/shared/IndustryProblemSolution";
import { IndustryServiceLinks } from "@/components/shared/IndustryServiceLinks";
import { IndustryWhyUs } from "@/components/shared/IndustryWhyUs";
import { IndustryValues } from "@/components/shared/IndustryValues";
import { ServiceProcess } from "@/components/shared/ServiceProcess";
import {
    RETAIL_PROBLEMS,
    RETAIL_SOLUTIONS,
    RETAIL_SERVICE_LINKS,
    RETAIL_WHY_REASONS,
    RETAIL_VALUES,
    RETAIL_PROCESS_STEPS,
    RETAIL_LOGOS,
} from "@/data/retail-business.data";

export function RetailHero() {
    return (
        <IndustryHero
            statBadge="Retail Businesses With A Strong Local Digital Presence Attract 5x More Foot Traffic From Online Search Than Those Without."
            title={
                <>
                    <span className="block">RETAIL DIGITAL MARKETING</span>
                    <span className="block">THAT DRIVES FOOTFALL, ONLINE SALES,</span>
                    <span className="block">AND REAL REVENUE</span>
                </>
            }
            titleClassName="text-[5.4vw] xs:text-2xl md:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.1]"
            subtitle="ATTRACT LEADS. CLOSE DEALS. SCALE FASTER."
            subtitleClassName="text-[2.8vw] xs:text-[10px] sm:text-xs md:text-xl lg:text-2xl"
            description="At EEGNITE, we build digital marketing strategies that work for retail businesses - online and offline. From local visibility and social commerce to paid ads and in-store traffic, every strategy we run is tied to the outcome that matters most for retail: more customers, more often."
            ctaText="Get a Free Growth Audit"
        />
    );
}

export function RetailLogoCarousel() {
    return (
        <IndustryLogoCarousel
            title="Brands That Choose Growth. Brands That Choose EEGNITE."
            logos={RETAIL_LOGOS}
        />
    );
}

export function RetailProblemSolution() {
    return (
        <IndustryProblemSolution
            problemsTitle="WHY RETAIL BUSINESSES STALL BEFORE THEY SCALE DIGITALLY"
            problemsSubtitle="Competition is fierce. Margins are tight. The brands winning are the ones who got their digital strategy right."
            solutionsTitle="WHAT EEGNITE DOES TO MAKE YOUR RETAIL BRAND IMPOSSIBLE TO IGNORE"
            solutionsSubtitle="Online visibility that drives physical footfall and digital sales simultaneously."
            problems={RETAIL_PROBLEMS}
            solutions={RETAIL_SOLUTIONS}
        />
    );
}

export function RetailServiceLinks() {
    return (
        <IndustryServiceLinks
            badgeText="Retailers Who Invest In Integrated Digital And Local Marketing See 34% Higher Revenue Growth Than Single-Channel Counterparts."
            title={<>EVERY DIGITAL MARKETING SERVICE YOUR RETAIL<br /><span className="text-[#FF6105]">BRAND NEEDS TO GROW ONLINE AND IN-STORE</span></>}
            description="We design and deploy cohesive acquisition strategies across all primary professional growth channels to target active patient searching intent."
            services={RETAIL_SERVICE_LINKS}
        />
    );
}

export function RetailWhyUs() {
    return (
        <IndustryWhyUs
            badgeText="Because Retail Marketing Needs Local Precision And Channel Integration Working Together."
            title={<>WHY EEGNITE FOR <span className="text-[#FF6105]">RETAIL</span> DIGITAL MARKETING?</>}
            reasons={RETAIL_WHY_REASONS}
        />
    );
}

export function RetailValues() {
    return <IndustryValues values={RETAIL_VALUES} />;
}

export function RetailProcess() {
    return (
        <ServiceProcess
            title={<>OUR PROCESS FOR <span className="text-[#FF6105]">RETAIL BUSINESS GROWTH</span></>}
            steps={RETAIL_PROCESS_STEPS}
        />
    );
}
