import dynamic from "next/dynamic";
import { buildMetadata } from "@/lib/seo";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServiceGrid from "@/components/sections/ServiceGrid";
import WhyUs from "@/components/sections/WhyUs";
import ProcessSteps from "@/components/sections/ProcessSteps";
import StatsBand from "@/components/sections/StatsBand";
import TestimonialPreview from "@/components/sections/TestimonialPreview";
import InsightsPreview from "@/components/sections/InsightsPreview";
import CTABanner from "@/components/sections/CTABanner";

const PhilosophyScroll = dynamic(() => import("@/components/sections/PhilosophyScroll"), {
    loading: () => <div className="py-28 bg-white"><div className="mh-container h-[420px] rounded-xl2 bg-cream-200 animate-pulse" /></div>,
});
const FeaturedStory = dynamic(() => import("@/components/sections/FeaturedStory"), {
    loading: () => <div className="py-28 bg-navy"><div className="mh-container h-[420px] rounded-xl2 bg-navy-700 animate-pulse" /></div>,
});
const TeamPreviewStrip = dynamic(() => import("@/components/sections/TeamPreviewStrip"), {
    loading: () => <div className="py-28 bg-cream"><div className="mh-container h-[380px] rounded-xl2 bg-white animate-pulse" /></div>,
});

export const metadata = buildMetadata({
    title: "Accounting & Advisory for Growing Businesses",
    description:
        "Meridian & Hale is a modern CPA and advisory firm offering tax preparation, bookkeeping, payroll, audit, and fractional CFO services.",
});

export default function HomePage() {
    return (
        <main>
            <Hero />
            <TrustBar />
            <ServiceGrid limit={6} />
            <PhilosophyScroll />
            <FeaturedStory />
            <WhyUs />
            <ProcessSteps />
            <StatsBand />
            <TeamPreviewStrip />
            <TestimonialPreview />
            <InsightsPreview />
            <CTABanner />
        </main>
    );
}
