import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import ServiceGrid from "@/components/sections/ServiceGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = buildMetadata({
    title: "Services",
    description: "Tax preparation, bookkeeping, payroll, audit & assurance, business advisory, and fractional CFO services for growing businesses.",
    path: "/services",
});

export default function ServicesPage() {
    return (
        <main>
            <PageHero
                eyebrow="Our Services"
                title="Every financial function your business needs, under one roof."
                description="From daily bookkeeping to boardroom strategy, our services are designed to scale alongside your business — pick one, or lean on all six."
            />
            <ServiceGrid />
            <ProcessSteps />
            <CTABanner />
        </main>
    );
}
