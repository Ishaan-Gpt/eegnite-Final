import type { Metadata } from "next";
import SeoPageContent from "@/components/page-content/SeoPageContent";

export const metadata: Metadata = {
    title: "Growth-Focused SEO Agency | EEGNITE",
    description: "Grow your organic visibility with EEGNITE’s SEO services. Technical SEO, content optimization, keyword strategy, and authority building designed to increase rankings, traffic, leads, and long-term revenue growth.",
    alternates: {
        canonical: 'https://www.eegnite.com/services/seo',
    },
};

export default function SeoPage() {
    return <SeoPageContent />;
}
