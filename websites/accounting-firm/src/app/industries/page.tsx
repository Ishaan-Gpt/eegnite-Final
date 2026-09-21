import dynamic from "next/dynamic";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import CTABanner from "@/components/sections/CTABanner";

const IndustryExplorer = dynamic(() => import("@/components/sections/IndustryExplorer"), {
    loading: () => <div className="min-h-[380px] rounded-xl2 bg-white border border-navy/[0.06] animate-pulse" />,
});

export const metadata = buildMetadata({
    title: "Industries We Serve",
    description: "Specialized accounting and advisory for small business, real estate, healthcare, nonprofits, e-commerce, and construction.",
    path: "/industries",
});

export default function IndustriesPage() {
    return (
        <main>
            <PageHero
                eyebrow="Industries"
                title="Accounting expertise shaped by your industry."
                description="Every sector has its own reporting quirks and compliance pressure points. Select an industry to see how we handle yours."
            />
            <section className="py-16 md:py-24 bg-cream">
                <div className="mh-container">
                    <Reveal>
                        <IndustryExplorer />
                    </Reveal>
                </div>
            </section>
            <CTABanner />
        </main>
    );
}
