import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { IndustryFaq } from "@/components/shared/IndustryFaq";
import { IndustryCta } from "@/components/shared/IndustryCta";
import { PROFESSIONAL_FAQS } from "@/data/professional-services.data";
import {
    ProfessionalServicesHero,
    ProfessionalServicesProblemSolution,
    ProfessionalServicesServiceLinks,
    ProfessionalServicesWhyUs,
    ProfessionalServicesValues,
    ProfessionalServicesProcess,
} from "@/components/page-content/professional-services-interactive";

export default function ProfessionalServicesPageContent() {
    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />
                <ProfessionalServicesHero />
                <ProfessionalServicesProblemSolution />
                <ProfessionalServicesServiceLinks />
                <ProfessionalServicesWhyUs />
                <ProfessionalServicesValues />
                <ProfessionalServicesProcess />
                <Testimonials />
                <IndustryFaq faqs={PROFESSIONAL_FAQS} />
                <IndustryCta
                    title="YOUR EXPERTISE SHOULD BE GENERATING MORE BUSINESS."
                    description="EEGNITE builds digital marketing systems for professional service firms designed to strengthen authority, attract qualified leads, and turn visibility into consistent client acquisition. From SEO and thought leadership content to paid campaigns, automation, and conversion strategy - every initiative is engineered to position your firm as the trusted choice and drive high-value inquiries from decision-makers actively searching for your expertise."
                    primaryCtaText="Get a Free Growth Audit"
                    secondaryCtaText="Request a Quote"
                    footnote="position your firm as the trusted choice and drive high-value inquiries"
                />
            </div>
            <Footer />
        </main>
    );
}
