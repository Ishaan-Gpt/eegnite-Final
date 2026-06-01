import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { IndustryFaq } from "@/components/shared/IndustryFaq";
import { IndustryCta } from "@/components/shared/IndustryCta";
import { B2B_FAQS } from "@/data/b2b.data";
import {
    B2bHero,
    B2bProblemSolution,
    B2bServiceLinks,
    B2bWhyUs,
    B2bValues,
    B2bProcess,
} from "@/components/page-content/b2b-interactive";

export default function B2bPageContent() {
    return (
        <main className="bg-white min-h-screen text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <div className="relative z-10">
                <Navbar />
                <B2bHero />
                <B2bProblemSolution />
                <B2bServiceLinks />
                <B2bWhyUs />
                <B2bValues />
                <B2bProcess />
                <Testimonials />
                <IndustryFaq faqs={B2B_FAQS} />
                <IndustryCta
                    title="YOUR PIPELINE SHOULD BE WORKING HARDER."
                    description="EEGNITE builds B2B digital marketing systems engineered to generate qualified demand, accelerate sales conversations, and turn marketing into a measurable revenue driver. From SEO and paid media to content, automation, and conversion strategy - every campaign is built to attract high-intent buyers and move them through the pipeline with purpose."
                    primaryCtaText="Get a Free Growth Audit"
                    secondaryCtaText="Request a Quote"
                    footnote="Turn marketing into a measurable revenue driver"
                />
            </div>
            <Footer />
        </main>
    );
}
