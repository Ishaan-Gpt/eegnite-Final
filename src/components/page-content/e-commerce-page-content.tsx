import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { IndustryFaq } from "@/components/shared/IndustryFaq";
import { IndustryCta } from "@/components/shared/IndustryCta";
import { ECOMMERCE_FAQS } from "@/data/e-commerce.data";
import {
    EcommerceHero,
    EcommerceProblemSolution,
    EcommerceServiceLinks,
    EcommerceWhyUs,
    EcommerceValues,
    EcommerceProcess,
} from "@/components/page-content/e-commerce-interactive";

export default function EcommercePageContent() {
    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />
                <EcommerceHero />
                <EcommerceProblemSolution />
                <EcommerceServiceLinks />
                <EcommerceWhyUs />
                <EcommerceValues />
                <EcommerceProcess />
                <Testimonials />
                <IndustryFaq faqs={ECOMMERCE_FAQS} />
                <IndustryCta
                    title="YOUR E-COMMERCE BRAND IS READY TO SCALE."
                    description="Let EEGNITE build the strategy, campaigns, and conversion systems that turn traffic into consistent revenue. From growth audits and conversion optimization to SEO, creatives, and retention — we create data-driven e-commerce marketing built to scale faster, sell smarter, and maximize every customer touchpoint."
                    primaryCtaText="Get a Free Growth Audit"
                    secondaryCtaText="Request a Quote"
                    footnote="Turn traffic into consistent revenue"
                />
            </div>
            <Footer />
        </main>
    );
}
