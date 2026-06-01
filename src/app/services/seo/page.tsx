import type { Metadata } from "next";
import SeoPageContent, { SEO_FAQS } from "@/components/page-content/SeoPageContent";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
    title: "Growth-Focused SEO Agency | EEGNITE",
    description: "Grow your organic visibility with EEGNITE’s SEO services. Technical SEO, content optimization, keyword strategy, and authority building designed to increase rankings, traffic, leads, and long-term revenue growth.",
    alternates: {
        canonical: 'https://www.eegnite.com/services/seo/',
    },
    openGraph: {
        title: "Growth-Focused SEO Agency | EEGNITE",
        description: "Grow your organic visibility with EEGNITE’s SEO services. Technical SEO, content optimization, keyword strategy, and authority building designed to increase rankings, traffic, leads, and long-term revenue growth.",
        url: "https://www.eegnite.com/services/seo/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - Search Engine Optimization"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Growth-Focused SEO Agency | EEGNITE",
        description: "Grow your organic visibility with EEGNITE’s SEO services. Technical SEO, content optimization, keyword strategy, and authority building designed to increase rankings, traffic, leads, and long-term revenue growth.",
        images: ["/eegnite-logo.png"]
    }
};

export default function SeoPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/services/seo/"
                pageTitle="Growth-Focused SEO Agency | EEGNITE"
                pageDescription="Grow your organic visibility with EEGNITE’s SEO services. Technical SEO, content optimization, keyword strategy, and authority building designed to increase rankings, traffic, leads, and long-term revenue growth."
                pageType="service"
                serviceName="Search Engine Optimization (SEO) Services"
                serviceDescription="Nurture organic traffic and improve Google keyword positions using advanced SEO practices, content strategy, semantic maps, and full authority backlinks."
                serviceCategory="SEO & Performance Marketing"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Services", url: "https://www.eegnite.com/services/" },
                    { position: 3, name: "SEO", url: "https://www.eegnite.com/services/seo/" }
                ]}
                faqs={SEO_FAQS.map(f => ({ question: f.q, answer: f.a }))}
            />
            <SeoPageContent />
        </>
    );
}
