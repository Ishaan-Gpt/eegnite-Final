import { Metadata } from "next";
import B2bPageContent from "@/components/page-content/b2b-page-content";
import { UnifiedSchemaJsonLd } from "@/components/JsonLd";
import { B2B_FAQS } from "@/data/b2b.data";

export const metadata: Metadata = {
    title: "Pipeline Growth B2B & Lead Generation Marketing Services | EEGNITE",
    description: "Stop chasing cold leads. EEGNITE builds B2B marketing systems that attract decision-makers, generate qualified opportunities, and fuel predictable revenue growth.",
    alternates: {
        canonical: "https://www.eegnite.com/industries/b2b-lead-generation/",
    },
    openGraph: {
        title: "Pipeline Growth B2B & Lead Generation Marketing Services | EEGNITE",
        description: "Stop chasing cold leads. EEGNITE builds B2B marketing systems that attract decision-makers, generate qualified opportunities, and fuel predictable revenue growth.",
        url: "https://www.eegnite.com/industries/b2b-lead-generation/",
        type: "website",
        images: [
            {
                url: "/eegnite-logo.png",
                width: 1200,
                height: 630,
                alt: "EEGNITE - B2B & Lead Generation"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Pipeline Growth B2B & Lead Generation Marketing Services | EEGNITE",
        description: "Stop chasing cold leads. EEGNITE builds B2B marketing systems that attract decision-makers, generate qualified opportunities, and fuel predictable revenue growth.",
        images: ["/eegnite-logo.png"]
    }
};

export default function B2bPage() {
    return (
        <>
            <UnifiedSchemaJsonLd
                pageUrl="https://www.eegnite.com/industries/b2b-lead-generation/"
                pageTitle="Pipeline Growth B2B & Lead Generation Marketing Services | EEGNITE"
                pageDescription="Stop chasing cold leads. EEGNITE builds B2B marketing systems that attract decision-makers, generate qualified opportunities, and fuel predictable revenue growth."
                pageType="industry"
                breadcrumbs={[
                    { position: 1, name: "Home", url: "https://www.eegnite.com/" },
                    { position: 2, name: "Industries", url: "https://www.eegnite.com/industries/" },
                    { position: 3, name: "B2B Lead Generation", url: "https://www.eegnite.com/industries/b2b-lead-generation/" }
                ]}
                faqs={B2B_FAQS.map(f => ({ question: f.q, answer: f.a }))}
            />
            <B2bPageContent />
        </>
    );
}
