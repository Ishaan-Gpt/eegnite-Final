"use client";

import { IndustryHero } from "@/components/shared/IndustryHero";
import { IndustryLogoCarousel } from "@/components/shared/IndustryLogoCarousel";
import { IndustryProblemSolution } from "@/components/shared/IndustryProblemSolution";
import { IndustryServiceLinks } from "@/components/shared/IndustryServiceLinks";
import { IndustryWhyUs } from "@/components/shared/IndustryWhyUs";
import { IndustryValues } from "@/components/shared/IndustryValues";
import { ServiceProcess } from "@/components/shared/ServiceProcess";
import {
    PROFESSIONAL_PROBLEMS,
    PROFESSIONAL_SOLUTIONS,
    PROFESSIONAL_SERVICE_LINKS,
    PROFESSIONAL_WHY_REASONS,
    PROFESSIONAL_VALUES,
    PROFESSIONAL_PROCESS_STEPS,
    PROFESSIONAL_LOGOS,
} from "@/data/professional-services.data";

export function ProfessionalServicesHero() {
    return (
        <IndustryHero
            statBadge="85% Of Clients Research Professional Service Providers Online Before Making Contact."
            title={
                <>
                    <span className="block">PROFESSIONAL SERVICES</span>
                    <span className="block">DIGITAL MARKETING THAT BUILDS AUTHORITY</span>
                    <span className="block">AND ATTRACTS IDEAL CLIENTS</span>
                </>
            }
            titleClassName="text-[5.4vw] xs:text-2xl md:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.1]"
            subtitle="SHOW EXPERTISE. ATTRACT DEMAND. CLOSE MORE DEALS."
            subtitleClassName="text-[2.8vw] xs:text-[10px] sm:text-xs md:text-xl lg:text-2xl"
            description="At EEGNITE, we build digital marketing strategies for law firms, financial advisors, management consultants, accountants, and professional service brands that compete on credibility. Every strategy is designed to convert your digital presence into a consistent source of high-value enquiries."
            ctaText="Get a Free Growth Audit"
        />
    );
}

export function ProfessionalServicesLogoCarousel() {
    return (
        <IndustryLogoCarousel
            title="Brands That Choose Growth. Brands That Choose EEGNITE."
            logos={PROFESSIONAL_LOGOS}
        />
    );
}

export function ProfessionalServicesProblemSolution() {
    return (
        <IndustryProblemSolution
            problemsTitle="WHY PROFESSIONAL SERVICE FIRMS STALL WHEN THEY TRY TO GROW DIGITALLY"
            problemsSubtitle="Reputation built over years. Pipeline built over whatever comes through the door. The gap is always the same."
            solutionsTitle="WHAT EEGNITE DOES TO BUILD AUTHORITY, REACH, AND A CONSISTENT CLIENT PIPELINE"
            solutionsSubtitle="Credibility-first strategy. High-value client acquisition. Measurable results."
            problems={PROFESSIONAL_PROBLEMS}
            solutions={PROFESSIONAL_SOLUTIONS}
        />
    );
}

export function ProfessionalServicesServiceLinks() {
    return (
        <IndustryServiceLinks
            badgeText="Professional Service Firms Using Content Marketing And Seo Generate 62% More Organic Enquiries."
            title={
                <div className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] leading-tight">
                    <span className="block">EVERY DIGITAL MARKETING SERVICE YOUR PROFESSIONAL SERVICE</span>
                    <span className="block text-[#FF6105] mt-1 lg:mt-2">FIRM NEEDS TO ATTRACT HIGH-VALUE CLIENTS</span>
                </div>
            }
            description="We design and deploy cohesive acquisition strategies across all primary professional growth channels to target active patient searching intent."
            services={PROFESSIONAL_SERVICE_LINKS}
        />
    );
}

export function ProfessionalServicesWhyUs() {
    return (
        <IndustryWhyUs
            badgeText="Because Professional Service Marketing Demands Credibility, Precision, And Patience."
            title={<>WHY EEGNITE FOR <span className="text-[#FF6105]">PROFESSIONAL SERVICES</span> DIGITAL MARKETING?</>}
            reasons={PROFESSIONAL_WHY_REASONS}
            titleClassName="text-xl md:text-3xl lg:text-[2.0rem] mb-12"
        />
    );
}

export function ProfessionalServicesValues() {
    return <IndustryValues values={PROFESSIONAL_VALUES} />;
}

export function ProfessionalServicesProcess() {
    return (
        <ServiceProcess
            title={<>OUR PROCESS FOR <span className="text-[#FF6105]">PROFESSIONAL SERVICES</span> GROWTH</>}
            steps={PROFESSIONAL_PROCESS_STEPS}
            titleClassName="text-2xl md:text-4xl lg:text-[2.8rem] whitespace-normal lg:whitespace-nowrap"
        />
    );
}
