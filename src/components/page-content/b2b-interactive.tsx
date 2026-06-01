"use client";

import { IndustryHero } from "@/components/shared/IndustryHero";
import { IndustryProblemSolution } from "@/components/shared/IndustryProblemSolution";
import { IndustryServiceLinks } from "@/components/shared/IndustryServiceLinks";
import { IndustryWhyUs } from "@/components/shared/IndustryWhyUs";
import { IndustryValues } from "@/components/shared/IndustryValues";
import { ServiceProcess } from "@/components/shared/ServiceProcess";
import {
    B2B_PROBLEMS,
    B2B_SOLUTIONS,
    B2B_SERVICE_LINKS,
    B2B_WHY_REASONS,
    B2B_VALUES,
    B2B_PROCESS_STEPS,
} from "@/data/b2b.data";

export function B2bHero() {
    return (
        <IndustryHero
            statBadge="B2B Companies Using Multi-Channel Digital Marketing Generate 67% More Leads Than Those Relying On Traditional Outreach Alone."
            title={<>B2B DIGITAL MARKETING<br /> THAT FILLS PIPELINES AND <br />CLOSES DEALS</>}
            titleClassName="text-[5.4vw] xs:text-2xl md:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.1]"
            subtitle="ATTRACT LEADS. CLOSE DEALS. SCALE FASTER."
            subtitleClassName="text-[2.8vw] xs:text-[10px] sm:text-xs md:text-xl lg:text-2xl"
            description="At EEGNITE, we build digital marketing systems engineered for B2B growth. Every campaign is designed to reach decision-makers, generate qualified leads, and support a sales cycle that demands trust before it demands a purchase."
            ctaText="Get a Free Growth Audit"
        />
    );
}

export function B2bProblemSolution() {
    return (
        <IndustryProblemSolution
            problemsTitle="WHY B2B BUSINESSES STALL BEFORE THEY SCALE DIGITALLY"
            problemsSubtitle="The Product Or Service Is Not The Problem. The Pipeline Strategy Is."
            solutionsTitle="WHAT EEGNITE DOES TO BUILD YOUR B2B PIPELINE WITH PRECISION"
            solutionsSubtitle="We Fill The Gaps Between Your Marketing And Your Revenue. Systematically."
            problems={B2B_PROBLEMS}
            solutions={B2B_SOLUTIONS}
        />
    );
}

export function B2bServiceLinks() {
    return (
        <IndustryServiceLinks
            badgeText="B2b Brands That Align Marketing And Sales Through Digital Channels Achieve 24% Faster Revenue Growth And 27% Higher Profit Margins."
            title={<>EVERY DIGITAL MARKETING SERVICE YOUR B2B<br /><span className="text-[#FF6105]">BRAND NEEDS TO GENERATE QUALIFIED LEADS</span></>}
            description="We design and deploy cohesive acquisition strategies across all primary professional growth channels to target executive buying intent."
            services={B2B_SERVICE_LINKS}
        />
    );
}

export function B2bWhyUs() {
    return (
        <IndustryWhyUs
            badgeText="Because B2B Growth Demands Precision Targeting, Not Just Broad Reach."
            title={<>WHY EEGNITE FOR <span className="text-[#FF6105]">B2B AND LEAD GENERATION</span> DIGITAL MARKETING?</>}
            reasons={B2B_WHY_REASONS}
            titleClassName="text-xl md:text-3xl lg:text-[2.0rem]"
        />
    );
}

export function B2bValues() {
    return <IndustryValues values={B2B_VALUES} />;
}

export function B2bProcess() {
    return (
        <ServiceProcess
            title={<>OUR PROCESS FOR <span className="text-[#FF6105]">B2B LEAD GENERATION</span> GROWTH</>}
            steps={B2B_PROCESS_STEPS}
        />
    );
}
