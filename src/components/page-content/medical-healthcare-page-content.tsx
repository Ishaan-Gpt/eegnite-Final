import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { IndustryFaq } from "@/components/shared/IndustryFaq";
import { IndustryCta } from "@/components/shared/IndustryCta";
import { HEALTHCARE_FAQS } from "@/data/medical-healthcare.data";
import {
    HealthcareHero,
    HealthcareProblemSolution,
    HealthcareServiceLinks,
    HealthcareWhyUs,
    HealthcareValues,
    HealthcareProcess,
} from "@/components/page-content/medical-healthcare-interactive";

export default function MedicalHealthcarePageContent() {
    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />
                <HealthcareHero />
                <HealthcareProblemSolution />
                <HealthcareServiceLinks />
                <HealthcareWhyUs />
                <HealthcareValues />
                <HealthcareProcess />
                <Testimonials />
                <IndustryFaq faqs={HEALTHCARE_FAQS} />
                <IndustryCta
                    title="YOUR PRACTICE DESERVES MORE BOOKINGS, MORE TRUST, MORE GROWTH."
                    description="EEGNITE builds healthcare digital marketing systems engineered to attract high-intent patients, increase appointment volume, and turn your online presence into a consistent growth engine. From SEO and paid media to content, reputation management, and conversion strategy - every campaign is built to strengthen credibility, generate qualified patient inquiries, and help your practice grow faster with measurable results."
                    primaryCtaText="Get a Free Growth Audit"
                    secondaryCtaText="Request a Quote"
                    footnote="Strengthen credibility and generate patient inquiries"
                />
            </div>
            <Footer />
        </main>
    );
}
