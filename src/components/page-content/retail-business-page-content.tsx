import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { IndustryFaq } from "@/components/shared/IndustryFaq";
import { IndustryCta } from "@/components/shared/IndustryCta";
import { RETAIL_FAQS } from "@/data/retail-business.data";
import {
    RetailHero,
    RetailProblemSolution,
    RetailServiceLinks,
    RetailWhyUs,
    RetailValues,
    RetailProcess,
} from "@/components/page-content/retail-business-interactive";

export default function RetailBusinessPageContent() {
    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />
                <RetailHero />
                <RetailProblemSolution />
                <RetailServiceLinks />
                <RetailWhyUs />
                <RetailValues />
                <RetailProcess />
                <Testimonials />
                <IndustryFaq faqs={RETAIL_FAQS} />
                <IndustryCta
                    title="YOUR STORE SHOULD BE DRIVING MORE SALES EVERY DAY."
                    description="EEGNITE builds retail digital marketing systems engineered to increase product visibility, attract ready-to-buy customers, and maximize online and offline sales performance. From SEO and paid advertising to social campaigns, retention marketing, and conversion optimization - every strategy is built to generate demand, increase repeat purchases, and turn traffic into measurable revenue growth."
                    primaryCtaText="Get a Free Growth Audit"
                    secondaryCtaText="Request a Quote"
                    footnote="Maximize online and offline sales performance"
                />
            </div>
            <Footer />
        </main>
    );
}
