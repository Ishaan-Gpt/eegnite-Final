import dynamic from "next/dynamic";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion/Reveal";
import { FAQS } from "@/data/faqs.data";
import CTABanner from "@/components/sections/CTABanner";

const PricingTiers = dynamic(() => import("@/components/sections/PricingTiers"), {
    loading: () => <div className="grid md:grid-cols-3 gap-6">{Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-96 rounded-xl2 bg-white border border-navy/[0.06] animate-pulse" />)}</div>,
});

export const metadata = buildMetadata({
    title: "Pricing",
    description: "Transparent, flat-fee pricing for bookkeeping, tax, payroll, and advisory packages — no hidden hourly surprises.",
    path: "/pricing",
});

export default function PricingPage() {
    return (
        <main>
            <PageHero
                eyebrow="Pricing"
                title="Flat-fee pricing. No hourly surprises."
                description="Three packages built around how businesses actually grow — from solo founder to multi-entity operation."
            />

            <section className="py-16 md:py-24 bg-cream">
                <div className="mh-container">
                    <PricingTiers />
                </div>
            </section>

            <section className="py-20 md:py-28 bg-white">
                <div className="mh-container max-w-3xl">
                    <Reveal>
                        <SectionHeading eyebrow="Pricing FAQ" title="Questions about our packages" />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <Accordion items={FAQS.slice(0, 4)} />
                    </Reveal>
                </div>
            </section>

            <CTABanner />
        </main>
    );
}
