import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import Accordion from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion/Reveal";
import { FAQS } from "@/data/faqs.data";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = buildMetadata({
    title: "Frequently Asked Questions",
    description: "Answers to common questions about working with Meridian & Hale — onboarding, software, pricing, and more.",
    path: "/faq",
});

export default function FaqPage() {
    return (
        <main>
            <PageHero eyebrow="FAQ" title="Frequently asked questions." description="Can't find what you're looking for? Reach out and we'll get back to you within a business day." />
            <section className="py-16 md:py-24 bg-cream">
                <div className="mh-container max-w-3xl">
                    <Reveal>
                        <Accordion items={FAQS} />
                    </Reveal>
                </div>
            </section>
            <CTABanner />
        </main>
    );
}
