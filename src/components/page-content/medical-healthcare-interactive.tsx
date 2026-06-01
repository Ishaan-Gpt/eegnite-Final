"use client";

import { IndustryHero } from "@/components/shared/IndustryHero";
import { IndustryProblemSolution } from "@/components/shared/IndustryProblemSolution";
import { IndustryServiceLinks } from "@/components/shared/IndustryServiceLinks";
import { IndustryWhyUs } from "@/components/shared/IndustryWhyUs";
import { IndustryValues } from "@/components/shared/IndustryValues";
import { ServiceProcess } from "@/components/shared/ServiceProcess";
import {
    HEALTHCARE_PROBLEMS,
    HEALTHCARE_SOLUTIONS,
    HEALTHCARE_SERVICE_LINKS,
    HEALTHCARE_WHY_REASONS,
    HEALTHCARE_VALUES,
    HEALTHCARE_PROCESS_STEPS,
} from "@/data/medical-healthcare.data";

export function HealthcareHero() {
    return (
        <IndustryHero
            statBadge="Healthcare Brands With Strong Digital Presence Attract 3x More New Patient Enquiries."
            title={<>HEALTHCARE DIGITAL MARKETING<br />THAT BUILDS PATIENT TRUST<br />AND DRIVES BOOKINGS</>}
            titleClassName="text-[5.4vw] xs:text-2xl md:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.1]"
            subtitle="INCREASE VISIBILITY. BUILD CREDIBILITY. FILL APPOINTMENTS."
            subtitleClassName="text-[2.8vw] xs:text-[10px] sm:text-xs md:text-xl lg:text-2xl"
            description="At EEGNITE, we build digital marketing systems designed specifically for healthcare businesses. Every strategy is built to establish trust, reach patients at the right moment, and convert online visibility into appointment bookings that grow your practice or brand."
            ctaText="Get a Free Growth Audit"
        />
    );
}

export function HealthcareProblemSolution() {
    return (
        <IndustryProblemSolution
            problemsTitle="WHY HEALTHCARE BRANDS STRUGGLE TO GROW ONLINE"
            problemsSubtitle="Patients choose on trust. Most healthcare brands are not building it digitally."
            solutionsTitle="WHAT EEGNITE DOES TO GROW YOUR HEALTHCARE BRAND DIGITALLY"
            solutionsSubtitle="Trust-first. Compliance-aware. Conversion-focused."
            problems={HEALTHCARE_PROBLEMS}
            solutions={HEALTHCARE_SOLUTIONS}
        />
    );
}

export function HealthcareServiceLinks() {
    return (
        <IndustryServiceLinks
            badgeText="Healthcare Brands That Invest In Seo And Paid Digital Marketing See An Average 57% Increase In New Patient Enquiries Within Six Months Of Launch."
            title={<>EVERY DIGITAL MARKETING SERVICE YOUR HEALTHCARE<br /><span className="text-[#FF6105]">BRAND NEEDS TO ATTRACT AND RETAIN PATIENTS</span></>}
            description="We design and deploy cohesive acquisition strategies across all primary professional growth channels to target active patient searching intent."
            services={HEALTHCARE_SERVICE_LINKS}
        />
    );
}

export function HealthcareWhyUs() {
    return (
        <IndustryWhyUs
            badgeText="Because Healthcare Marketing Demands Both Sensitivity And Performance. We Deliver Both."
            title={<>WHY EEGNITE FOR <span className="text-[#FF6105]">MEDICAL AND HEALTHCARE</span> DIGITAL MARKETING?</>}
            reasons={HEALTHCARE_WHY_REASONS}
        />
    );
}

export function HealthcareValues() {
    return <IndustryValues values={HEALTHCARE_VALUES} />;
}

export function HealthcareProcess() {
    return (
        <ServiceProcess
            title={<>OUR PROCESS FOR <span className="text-[#FF6105]">HEALTHCARE BRAND GROWTH</span></>}
            steps={HEALTHCARE_PROCESS_STEPS}
        />
    );
}
