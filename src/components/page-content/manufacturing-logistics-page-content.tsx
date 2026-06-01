import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { IndustryFaq } from "@/components/shared/IndustryFaq";
import { IndustryCta } from "@/components/shared/IndustryCta";
import { MANUFACTURING_FAQS } from "@/data/manufacturing-logistics.data";
import {
    ManufacturingHero,
    ManufacturingProblemSolution,
    ManufacturingServiceLinks,
    ManufacturingWhyUs,
    ManufacturingValues,
    ManufacturingProcess,
} from "@/components/page-content/manufacturing-logistics-interactive";

export default function ManufacturingLogisticsPageContent() {
    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />
                <ManufacturingHero />
                <ManufacturingProblemSolution />
                <ManufacturingServiceLinks />
                <ManufacturingWhyUs />
                <ManufacturingValues />
                <ManufacturingProcess />
                <Testimonials />
                <IndustryFaq faqs={MANUFACTURING_FAQS} />
                <IndustryCta
                    title="YOUR DIGITAL PRESENCE SHOULD BE GENERATING MORE Revenue."
                    description="EEGNITE builds B2B digital marketing systems for manufacturing and logistics companies focused on attracting procurement teams, generating qualified inquiries, and accelerating business growth. From SEO and industrial content marketing to paid media, lead generation funnels, and automation - every campaign is engineered to position your company as a reliable industry partner and convert high-intent buyers into long-term clients."
                    primaryCtaText="Get a Free Growth Audit"
                    secondaryCtaText="Request a Quote"
                    footnote="attract high-intent buyers into long-term clients"
                />
            </div>
            <Footer />
        </main>
    );
}
