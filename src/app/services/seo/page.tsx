import type { Metadata } from "next";
import SeoPageContent from "@/components/page-content/SeoPageContent";

export const metadata: Metadata = {
    title: "Best SEO Services in Kolkata | ROI-Driven Growth Partner | EEGNITE",
    description: "EEGNITE provides engineering-led SEO services in Kolkata. We turn search demand into measurable revenue with technical SEO, content strategy, and local dominance.",
    alternates: {
        canonical: 'https://eegnite.com/services/seo',
    },
};

export default function SeoPage() {
    return <SeoPageContent />;
}
